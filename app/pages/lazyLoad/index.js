import React from 'react'
import './index.less'

const LazyLoad = () => {
    let loadingImg = 'http://1.lazyloading.sinaapp.com/Lazy/images/loading.gif'
    let allImgs = [
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/1.jpg'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/2.jpg'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/3.jpg'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/4.jpg'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/5.png'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/6.jpg'},
        {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/7.png'}
    ]

    // 1、获取对象距离页面顶端的距离
    const getHeight = (obj)=> {
        let h = 0
        while(obj) {
            h += obj.offsetTop          // 距离上一个标签对距离
            obj = obj.offsetParent      // 
        }
        return h
    }

    // 2、判断是否在可视区域内
    const isVisible = (obj)=> {
        let t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop)
        let h = getHeight(obj)
        console.log(t, 't')
        return (h < t)          // true 则视为在可是范围内
    }

    // 3、绑定滚动事件，进行判断那些元素在可视区域内，然后进行图片加载
    window.onscroll = function() {
        let imgDiv = document.getElementById('imgs')
        let allImgs = imgDiv.children
        console.log(allImgs)
        for (let i = 0; i < allImgs.length; i++) {
            const element = allImgs[i]
            if (isVisible(element)) {
                setImg(i)
            }
        }
    }

    // 4、在页面onload的时候，触发一次onscroll
    // window.onload = function() {
    //     window.onscroll()
    // }

    // 5、去获取 需要展示出来图片的 src
    const setImg = (index) => {
        let imgDiv = document.getElementById('imgs')
        let allImgs = imgDiv.children
        let curSrc = ''
        if(allImgs[index].dataset) {
            curSrc = allImgs[index].dataset
        } else {
            curSrc = allImgs[index].getAttribute('data-src')
        }
        console.log(curSrc, 'curSrc')
        allImgs[index].src = curSrc.src
    }


    return(
        <div>
            <h2 className="text-center" id="title">当前页面图片</h2>
            <div id="imgs">
                {allImgs.map((item, index) => {
                    return <img className="allImgs" id={'img' + index} data-src={item.url} key={index}/>
                })}
            </div>
        </div>
    )
}

export default LazyLoad