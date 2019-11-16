<template>
    <div class="videoContainer">
        <div class="box">
            <div class="cell">
                <div class="videoBox">
                        
                            <video width="350" height="250" controls>
                                <source src="../assets/video/a.mp4" type="video/mp4">
                                <source src="movie.ogg" type="video/ogg">
                                您的浏览器不支持 HTML5 video 标签。
                            </video>
                </div>
                <div class="discribe">人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。</div>
            </div>
            <div class="cell">
                <div class="videoBox">
                        <embed height="250" quality="high" src="http://shared.51cscs.com/4/movie/junshimonikecheng.swf" type="application/x-shockwave-flash" width="350">
                </div>
                <div class="discribe">马鞍山农村商业银行于2009年7月8日揭牌开业，是在整合原马鞍山农村合作信用联社及所辖分支机构的基础上，经股份合作制改造而成立的一家地方性法人银行机构。此次马鞍山农村商业银行“进军北戴河《士兵突击》军事情景模拟课程”由上海众基猎人学校独家承办。</div>
            </div>
            <div class="cell">
                <div class="videoBox">
                    <embed height="250" quality="high" src="http://shared.51cscs.com/4/movie/CSkaimushipin.swf" type="application/x-shockwave-flash" width="350">
                </div>
                <div class="discribe">比电影更华丽的枪战，比生死更震撼的情节，上海众基猎人学校年度巨制《集结密令》，不止是一场视觉盛宴，更有想不到的海量惊喜！</div>
            </div>
        </div>
    </div>
</template>

<style>
    .videoContainer{
        margin: 40px 100px;
    }
    .videoContainer .box{
        overflow: hidden;
    }
    .videoContainer .box .cell{
        float: left;
        width:310px;
        margin: 10px;
        background: #060c2188;
        border-bottom: 1px solid #d6d6d6;
    }
    .videoContainer .box .cell .videoBox{
        width: 100%;
        height:250px;
        background: #000;
        overflow: hidden;
    }
    .videoContainer .box .cell .discribe{
        width: 290px;
        height: 210px;
        text-align: left;
        line-height: 30px;
        overflow: hidden;
        padding: 6px 10px 4px;
        color:#fff;
    }
</style>