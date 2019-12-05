<template>
  <div class="zone-container">
    <div class="head-container clearfix">
      <div class="userAvatar"><img
          src="../../assets/img/avatar2.jpg"
          alt=""
        ></div>
      <div class="rightInfo">
        <div class="username">ddddddddddsry</div>
        <div class="exp">军衔：上尉 <span>|</span> 总积分：5569</div>
        <div class="progress-bar-panel">
          <div
            class="progress-bar-count"
            style="width:30%"
          ></div>
          <span class="count">5569/30000</span>
        </div>
      </div>
      <div class="rightNav">
        <ul>
          <li><a>发起活动</a></li>
          <li><a>我的装备</a></li>
          <li><a>我的战队</a></li>
        </ul>
      </div>
    </div>
    <div class="box">
      <el-tabs tab-position="left">
        <el-tab-pane
          label="战圈动态"
          class="content"
        >
          <div class="commit">
            <div class="title">有什么想与大家分享？</div>
            <div class="textInput">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div class="upload"><span class="pic"><i class="el-icon-picture"></i> 图片</span><span class="video"><i class="el-icon-video-camera-solid"></i> 视频</span> <a class="submit btn">发布</a></div>
          </div>
          <div class="review">
            <div class="headInfo clearfix">
              <div class="avatar"><img
                  src="../../assets/img/avatar3.jpg"
                  alt=""
                ></div>
              <div class="rightInfo">
                <div class="username">吃鸡指导员</div>
                <div class="time">今天21:30</div>
              </div>
            </div>
            <div class="text">给自己放个假，好好犒劳犒劳自己一年的幸苦，跟我一起出发吧！</div>
            <div class="pic clearfix">
              <div class="picbox">
                <img
                  src="../../assets/img/review1.jpg"
                  alt=""
                >
              </div>
              <div class="picbox">
                <img
                  src="../../assets/img/review2.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="bottom">
              <span><i class="el-icon-folder-opened"></i> 收藏</span> <span><i class="el-icon-s-comment"></i> 评论</span> <span><i class="el-icon-thumb"></i> 点赞</span>
            </div>
          </div>
          <div class="review">
            <div class="headInfo clearfix">
              <div class="avatar"><img
                  src="../../assets/img/avatar2.jpg"
                  alt=""
                ></div>
              <div class="rightInfo">
                <div class="username">ddddddddddsry</div>
                <div class="time">今天17:39</div>
              </div>
            </div>
            <div class="text">车臣共和国特种兵的这装备可以打多少分呢？</div>
            <div class="pic clearfix">
              <div class="picbox">
                <img
                  src="../../assets/img/review3.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="bottom">
              <span><i class="el-icon-folder-opened"></i> 收藏</span> <span><i class="el-icon-s-comment"></i> 评论</span> <span><i class="el-icon-thumb"></i> 点赞</span>
            </div>
          </div>
          <div class="review">
            <div class="headInfo clearfix">
              <div class="avatar"><img
                  src="../../assets/img/avatar4.jpg"
                  alt=""
                ></div>
              <div class="rightInfo">
                <div class="username">神狙击-</div>
                <div class="time">今天23:36</div>
              </div>
            </div>
            <div class="text">百年老枪，柯尔特M1903</div>
            <div class="pic clearfix">
              <div class="picbox">
                <img
                  src="../../assets/img/review4.jpg"
                  alt=""
                >
              </div>
              <div class="picbox">
                <img
                  src="../../assets/img/review5.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="bottom">
              <span><i class="el-icon-folder-opened"></i> 收藏</span> <span><i class="el-icon-s-comment"></i> 评论</span> <span><i class="el-icon-thumb"></i> 点赞</span>
            </div>
          </div>
          <div class="review">
            <div class="headInfo clearfix">
              <div class="avatar"><img
                  src="../../assets/img/avatar.jpg"
                  alt=""
                ></div>
              <div class="rightInfo">
                <div class="username">Ceriseee-</div>
                <div class="time">今天16:19</div>
              </div>
            </div>
            <div class="text">车臣共和国！拜拜！拜拜！拜拜啦！</div>
            <div class="pic clearfix">
              <div class="picbox">
                <img
                  src="../../assets/img/review6.jpg"
                  alt=""
                >
              </div>
              <div class="picbox">
                <img
                  src="../../assets/img/review7.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="bottom">
              <span><i class="el-icon-folder-opened"></i> 收藏</span> <span><i class="el-icon-s-comment"></i> 评论</span> <span><i class="el-icon-thumb"></i> 点赞</span>
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane
          label="我的分享"
          class="content"
        >

          <div class="review">
            <div class="headInfo clearfix">
              <div class="avatar"><img
                  src="../../assets/img/avatar2.jpg"
                  alt=""
                ></div>
              <div class="rightInfo">
                <div class="username">ddddddddddsry</div>
                <div class="time">今天17:39</div>
              </div>
            </div>
            <div class="text">车臣共和国特种兵的这装备可以打多少分呢？</div>
            <div class="pic clearfix">
              <div class="picbox">
                <img
                  src="../../assets/img/review3.jpg"
                  alt=""
                >
              </div>
            </div>
            <div class="bottom">
              <span><i class="el-icon-folder-opened"></i> 收藏</span> <span><i class="el-icon-s-comment"></i> 评论</span> <span><i class="el-icon-thumb"></i> 点赞</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="大神广场"
          class="content"
        >
          <div class="elite">
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar4.jpg"
                  alt=""
                >
              </div>
              <div class="name">吃鸡指导员 | 上将</div>
              <div class="team">战队：黑鹰BY</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar6.jpg"
                  alt=""
                >
              </div>
              <div class="name">战术阿鲁 | 上将</div>
              <div class="team">战队：026战队</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar3.jpg"
                  alt=""
                >
              </div>
              <div class="name">山鹰 | 少将</div>
              <div class="team">战队：龙魂战队</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar2.jpg"
                  alt=""
                >
              </div>
              <div class="name">ddddddddddsry | 上尉</div>
              <div class="team">战队：铁三角突击队</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar5.jpg"
                  alt=""
                >
              </div>
              <div class="name">无锡校长 | 上尉</div>
              <div class="team">战队：TMR</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
            <div class="eliteBox">
              <div class="eliteImg">
                <img
                  src="../../assets/img/avatar.jpg"
                  alt=""
                >
              </div>
              <div class="name">军事霸霸 | 中尉</div>
              <div class="team">战队：血狼</div>
              <div class="historyScore clearfix"><a>查看历史战绩</a></div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less">
.zone-container {
  .el-tabs {
    height: 100% !important;
  }

  .el-tabs__item {
    color: #fff;
  }
}

.progress-bar-panel {
  width: 180px;
  height: 8px;
  background-image: url(../../assets/img/progress.png);
  position: relative;
  .progress-bar-count {
    // background-image: url(../../assets/img/progress2.png);
    text-align: right;
    border-radius: 12px;
    height: 8px;
    background: linear-gradient(
      to top,
      rgb(95, 135, 221, 0.5),
      rgba(0, 217, 255, 0.5)
    );
  }
  .count {
    position: absolute;
    left: 190px;
    top: -5px;
    font-size: 8px;
  }
}
</style>
<style lang="less" scoped>
.zone-container {
  min-width: 1055px;
  padding-top: 10px;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  .head-container {
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    .userAvatar {
      float: left;
      width: 128px;
      height: 128px;
      img {
        width: 120px;
        height: 120px;
        border-radius: 2px;
        border: #fff 3px solid;
      }
    }
    .rightInfo {
      float: left;
      margin-left: 30px;
      .username {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .exp {
        font-size: 14px;
        margin-bottom: 7px;

        span {
          margin: 0 10px;
        }
      }
    }
    .rightNav {
      position: absolute;
      right: 0;
      bottom: 0;
      ul {
        li {
          float: left;
          a {
            display: inline-block;
            padding: 0px 20px;
            &:hover {
              color: #409eff;
            }
          }
        }
      }
    }
  }
  .box {
    box-sizing: border-box;
    padding: 50px;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
    width: 100%;
    // height: 100%;
  }

  .content {
    padding-left: 50px;
    color: #fff;
  }
  .commit {
    padding-bottom: 40px;
    margin-bottom: 20px;
    border-bottom: 1px dashed #ccc;
    .title {
      color: #ccc;
      margin-bottom: 10px;
    }
    .textInput {
      //   background-color: pink;
      padding: 5px;
      border: 1px solid #eee;
      background: rgba(31, 31, 31, 0.6);
      &:hover {
        border: 1px solid rgb(19, 116, 180);
      }
      textarea {
        font-size: 14px;
        color: #fff;
        width: 100%;
        background: transparent;
        height: 68px;
        min-height: 68px;
        resize: none;
        font-size: 14px;
        line-height: 18px;
        word-wrap: break-word;
        outline: none;
        border: none;
        padding: 0;
        box-shadow: none;
      }
    }
    .upload {
      margin-top: 5px;
      .video {
        margin-left: 20px;
      }
      .submit {
        float: right;
      }
    }
  }

  .review {
    background: rgba(0, 0, 0, 0.6);
    padding: 20px 40px 0;
    margin-bottom: 20px;
    .headInfo {
      margin-bottom: 10px;
      .avatar {
        float: left;
        border-radius: 50%;
        overflow: hidden;
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
        }
      }
      .rightInfo {
        float: left;
        margin-left: 10px;
        .username {
          margin-top: 5px;
          font-weight: 700;
          font-size: 14px;
        }
        .time {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
    .text {
      margin-bottom: 10px;
    }
    .pic {
      margin-bottom: 10px;
      .picbox {
        float: left;
        width: 250px;
        height: 250px;
        margin-right: 10px;
        img {
          width: 250px;
          height: 250px;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #333;
      height: 40px;
      line-height: 40px;
      span {
        width: 33.3%;
        text-align: center;
        &::after {
          content: "";
          width: 1px;
          height: 25px;
          background: #666;
          float: right;
          margin-top: 6px;
        }
      }
      span:last-child::after {
        display: none;
      }
    }
  }

  .elite {
    .eliteBox {
      float: left;
      width: 250px;
      margin-right: 15px;
      margin-bottom: 15px;
      padding: 20px 10px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.6);
      .eliteImg {
        width: 230px;
        height: 230px;
        overflow: hidden;
        img {
        height: 230px;
          min-width: 230px;
          min-height: 230px;
        }
      }
      .name {
        margin-top: 10px;
      }
      .team {
        margin-top: 10px;
      }
      .historyScore {
        margin-top: 10px;
      a {
        float: right;
        color: #409eff;
        // text-decoration: underline;
      }
        
      } 
    }
  }
}
</style>