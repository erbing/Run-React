import React from 'react'
import { connect } from 'react-redux'

import './index.less'

const allIcons = [
    'appreciate','check','close','edit','emoji','favorfill',
    'favor','loading','locationfill','location','roundcheckfill','roundcheck','roundclosefill',
    'roundclose','roundrightfill','roundright',
    'search','taxi','timefill','time','unfold','warnfill','warn','camerafill','camera','commentfill',
    'comment','likefill','like','notificationfill','notification','order','evaluate','pay','send','shop','ticket','back','cascades','discover',
    'list','more','scan','settings','questionfill','question','shopfill','form','pic','filter',
    'footprint','top','pulldown','pullup','right','refresh','moreandroid',
    'deletefill','refund','cart','remind','delete','profile','home_fill_light','cartfill','discoverfill','homefill','message',
    'lock','unlock','vip','weibo','activity',
    'big','friendaddfill','friendadd','friendfamous','friend','squarecheckfill','squarecheck','round','roundaddfill','roundadd',
    'add','notificationforbidfill','fold','redpacket','appreciatefill','infofill','info',
    'forwardfill','forward','rechargefill ','recharge','voice','voicefill','friendfavor','wifi','share','searchlist','sort',
    '1212','down','countdownfill','countdown','noticefill','notice','upstagefill',
    'upstage','female','male','pullleft','pullright','rankfill','rank','picfill','refresharrow','markfill','mark',
    'album','peoplefill','people','attentionfill','attention','backwardfill','playfill','stop','tagfill','tag','group','all','post',
    'radiobox','rounddown','upload','writefill','write','radioboxfill','add1',
    'move','crownfill','crown','upblock','musicfill','musicforbidfill','roundleftfill','triangledownfill',
    'triangleupfill','roundleftfill-copy','pulldown1','sortlight','attentionforbid','attentionforbidfill','voicelight','attentionfavorfill-copy','full',
    'videofill','video','home_light','my_light','cart_light','home_fill_light',
    'cart_fill_light','search_light','scan_light','close_light','add_light',
    'friend_add_light','refresh_light','back_light','appreciate_light',
    'favor_light','appreciate_fill_light','comment_fill_light','video_light','subscription_light'
]

const Icon = (props) => {
    return (
        <div className="router">
            <h3 className="icon-title"> 展示所有 icon 信息  {}</h3>
            {/* <div className="item-icon">
                <i className="icon icon-appreciate"></i>
                <p>icon-appreciate</p>
            </div> */}
            {
                allIcons.map((item, index) => {
                    return (
                        <div className="item-icon" key={index}>
                            <i className={'icon-' + item + ' icon'} ></i>
                            <p className="icon-p">icon-{item}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Icon