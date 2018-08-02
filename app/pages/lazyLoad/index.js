import React from 'react'
import './index.less'


class LazyLoad extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            allImgs: [
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/1.jpg'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/2.jpg'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/3.jpg'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/4.jpg'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/5.png'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/6.jpg'},
                {url: 'http://1.lazyloading.sinaapp.com/Lazy/images/7.png'}
            ]
        }
    }
    componentDidMount() {

        function lazyload (options) {
            var doc = options.id ? document.getElementById(options.id) : document
            if (doc === null) return
            var tmp = doc.getElementsByTagName('img')
            var tmplen = tmp.length
            var imgobj = []
    
            for (var i = 0; i < tmplen; i++) {
                var _tmpobj = tmp[i]
                if (_tmpobj.getAttribute('data-src') !== null) {
                    if (isLoad(_tmpobj)) {
                        setimg(_tmpobj)
                    } else {
                        imgobj.push(_tmpobj)
                    }
                }
            }
            var len = imgobj.length
            function handler () {
                for (var i = 0, end = len; i < end; i++) {
                    var obj = imgobj[i]
                    if (isLoad(obj)) {
                        _setimg(obj)
                        imgobj.splice(i, 1)
                        len--
                        if (len === 0) {
                            loadstop()
                        }
                    }
                }
            }
    
            function isLoad (ele) {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                if (typeof ele === 'undefined') return false
                var edit = ~~ele.getAttribute('data-range') || options.lazyRange
                var clientHeight = scrollTop + document.documentElement.clientHeight + edit
                var offsetTop = 0
    
                while (ele.tagName.toUpperCase() !== 'BODY') {
                    offsetTop += ele.offsetTop
                    ele = ele.offsetParent
                }
                return (clientHeight > offsetTop)
            }
    
            function _setimg (ele) {
                if (options.lazyTime) {
                    setTimeout(function () {
                        setimg(ele)
                    },
                    options.lazyTime + ~~ele.getAttribute('data-time'))
                } else {
                    setimg(ele)
                }
            }
    
            function setimg (ele) {
                ele.src = ele.getAttribute('data-src')
            }
    
            function loadstop () {
                window.removeEventListener ? window.removeEventListener('scroll', handler, false) : window.detachEvent('onscroll', handler)
            }
    
            loadstop()
            window.addEventListener ? window.addEventListener('scroll', handler, false) : window.attachEvent('onscroll', handler)
        }

        lazyload({
            id: 'imgs',
            lazyTime: 200,
            lazyRange: 100
        })
    }

    // componentWillMount () {
    //     let loadingImg = 'http://1.lazyloading.sinaapp.com/Lazy/images/loading.gif'
    //     let allImgs = this.state.allImgs
    
    //     // 1、获取对象距离页面顶端的距离
    //     const getHeight = (obj)=> {
    //         let h = 0
    //         while(obj) {
    //             h += obj.offsetTop          // 距离上一个标签对距离
    //             obj = obj.offsetParent      // 
    //         }
    //         return h
    //     }
    
    //     // 2、判断是否在可视区域内
    //     const isVisible = (obj)=> {
    //         let t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop)
    //         let h = getHeight(obj)
    //         console.log(h, 'h')
    //         return (h < t)          // true 则视为在可是范围内
    //     }
    
    //     // 5、去获取 需要展示出来图片的 src
    //     const setImg = (index) => {
    //         console.log(index, 'index')
    //         let imgDiv = document.getElementById('imgs')
    //         let allImgs = imgDiv.children
    //         let curSrc = ''
    //         if(allImgs[index].children[0].dataset) {
    //             curSrc = allImgs[index].children[0].dataset
    //         } else {
    //             curSrc = allImgs[index].children[0].getAttribute('data-src')
    //         }

    //         let curImgs = document.createElement('img')
    //         curImgs.src = curSrc.src
    //         // allImgs[index].children[0].src = curSrc.src
    //         if (allImgs[index].children.length == 1) {
    //             allImgs[index].appendChild(curImgs)
    //         }
    //     }

    //     // 3、绑定滚动事件，进行判断那些元素在可视区域内，然后进行图片加载
    //     window.onscroll = function() {
    //         let imgDiv = document.getElementById('imgs')
    //         let allImgs = imgDiv.children
    //         for (let i = 0; i < allImgs.length; i++) {
    //             let element = allImgs[i]

    //             if (isVisible(element)) {
    //                 // setTimeout('setImg( '+ i + ')', 500)
    //                 // setImg(i)
    //                 setTimeout((()=>{
    //                     let index = i
    //                     setImg(index)
    //                 })(i), 1000)
    //             }
    //         }
    //     }
    
    //     // 4、在页面onload的时候，触发一次onscroll
    //     // window.onscroll()
    // }

    componentWillUnmount() {
        window.onscroll = null
    }

    render() {
        return(
            <div>
                <h2 className="text-center" id="title">当前页面图片</h2>
                <div id="imgs">
                    {this.state.allImgs.map((item, index) => {
                        return <li className='li-img' key={index}><img className="allImgs" id={'img' + index} data-src={item.url}/></li>
                    })}
                </div>
            </div>
        )
    }
}


export default LazyLoad