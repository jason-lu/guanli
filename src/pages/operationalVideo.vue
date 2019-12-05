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
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>
            <div class="cell">
                <div class="videoBox">

                    <video width="350" height="250" controls>
                        <source src="../assets/video//zuozhan1.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>
            <div class="cell">
                <div class="videoBox">

                    <video width="350" height="250" controls>
                        <source src="../assets/video/zuozhan3.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>
            <div class="cell">
                <div class="videoBox">

                    <video width="350" height="250" controls>
                        <source src="../assets/video/a.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>
            <div class="cell">
                <div class="videoBox">

                    <video width="350" height="250" controls>
                        <source src="../assets/video//zuozhan1.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>
            <div class="cell">
                <div class="videoBox">

                    <video width="350" height="250" controls>
                        <source src="../assets/video/zuozhan3.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        您的浏览器不支持 HTML5 video 标签。
                    </video>
                </div>
                <div class="discribe">
                    人才市场上，为何那些从IBM、万科、华为、海尔等优秀企业出来的员工更受业界青睐呢?因为他们已经传承了原企业的先进理念、制度、习惯，并保持了良好的执行能力和企业文化，与众不同的气质时刻洋溢着不俗的竞争力。来众基盘活你的"兵"。
                </div>
            </div>

        </div>
    </div>
</template>

<style>
    .videoContainer {
        /* margin: 40px 100px; */
    }

    .videoContainer .box {
        overflow: hidden;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .videoContainer .box .cell {
        float: left;
        width: 350px;
        margin: 20px 20px 50px;
        background: rgba(0, 0, 0, .4);
        border-bottom: 1px solid #d6d6d6;
    }

    .videoContainer .box .cell .videoBox {
        width: 100%;
        height: 250px;
        background: #000;
        overflow: hidden;
    }

    .videoContainer .box .cell .discribe {
        width: 290px;
        height: 210px;
        text-align: left;
        line-height: 30px;
        overflow: hidden;
        padding: 6px 10px 4px;
        color: #fff;
    }
</style>