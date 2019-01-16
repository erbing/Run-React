import React from "react";
import "./index.less";
import Box from "@component/box";
import BoxTitle from "@component/boxTitle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Actions from "../../store/actions";

const allIcons = [
  "appreciate",
  "check",
  "close",
  "edit",
  "emoji",
  "favorfill",
  "favor",
  "loading",
  "locationfill",
  "location",
  "roundcheckfill",
  "roundcheck",
  "roundclosefill",
  "roundclose",
  "roundrightfill",
  "roundright",
  "search",
  "taxi",
  "timefill",
  "time",
  "unfold",
  "warnfill",
  "warn",
  "camerafill",
  "camera",
  "commentfill",
  "comment",
  "likefill",
  "like",
  "notificationfill",
  "notification",
  "order",
  "evaluate",
  "pay",
  "send",
  "shop",
  "ticket",
  "back",
  "cascades",
  "discover",
  "list",
  "more",
  "scan",
  "settings",
  "questionfill",
  "question",
  "shopfill",
  "form",
  "pic",
  "filter",
  "footprint",
  "top",
  "pulldown",
  "pullup",
  "right",
  "refresh",
  "moreandroid",
  "deletefill",
  "refund",
  "cart",
  "remind",
  "delete",
  "profile",
  "home_fill_light",
  "cartfill",
  "discoverfill",
  "homefill",
  "message",
  "lock",
  "unlock",
  "vip",
  "weibo",
  "activity",
  "big",
  "friendaddfill",
  "friendadd",
  "friendfamous",
  "friend",
  "squarecheckfill",
  "squarecheck",
  "round",
  "roundaddfill",
  "roundadd",
  "add",
  "notificationforbidfill",
  "fold",
  "redpacket",
  "appreciatefill",
  "infofill",
  "info",
  "forwardfill",
  "forward",
  "rechargefill ",
  "recharge",
  "voice",
  "voicefill",
  "friendfavor",
  "wifi",
  "share",
  "searchlist",
  "sort",
  "1212",
  "down",
  "countdownfill",
  "countdown",
  "noticefill",
  "notice",
  "upstagefill",
  "upstage",
  "female",
  "male",
  "pullleft",
  "pullright",
  "rankfill",
  "rank",
  "picfill",
  "refresharrow",
  "markfill",
  "mark",
  "album",
  "peoplefill",
  "people",
  "attentionfill",
  "attention",
  "backwardfill",
  "playfill",
  "stop",
  "tagfill",
  "tag",
  "group",
  "all",
  "post",
  "radiobox",
  "rounddown",
  "upload",
  "writefill",
  "write",
  "radioboxfill",
  "add1",
  "move",
  "crownfill",
  "crown",
  "upblock",
  "musicfill",
  "musicforbidfill",
  "roundleftfill",
  "triangledownfill",
  "triangleupfill",
  "roundleftfill-copy",
  "pulldown1",
  "sortlight",
  "attentionforbid",
  "attentionforbidfill",
  "voicelight",
  "attentionfavorfill-copy",
  "full",
  "videofill",
  "video",
  "home_light",
  "my_light",
  "cart_light",
  "home_fill_light",
  "cart_fill_light",
  "search_light",
  "scan_light",
  "close_light",
  "add_light",
  "friend_add_light",
  "refresh_light",
  "back_light",
  "appreciate_light",
  "appreciate_fill_light",
  "comment_fill_light",
  "video_light",
  "subscription_light"
];

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "图标 Icon"
    };
  }
  render() {
    return (
      <div>
        <Box title={this.state.title}>
          <BoxTitle title="基本用法" />
          <div className="flex-wrap icon-main">
            {allIcons.map((item, index) => {
              return (
                <div className="item-icon" key={index}>
                  <i className={"icon-" + item + " icon"} />
                  <p className="icon-p">icon-{item}</p>
                </div>
              );
            })}
          </div>
        </Box>
      </div>
    );
  }

  componentDidMount() {
    this.props.actions.changeTitle(this.state.title);
  }
}

const mapStateToProps = state => {
  const { title } = state;
  return { title };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

const connectIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(Icon);

export default connectIcon;
