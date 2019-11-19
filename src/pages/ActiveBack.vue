<template>
    <div>
        <div class="editcontainer flex">
            <div class="videoBox">
                <video width="400" height="250" controls>
                    <source src="../assets/video/zuozhan1.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持 HTML5 video 标签。
                </video>
            </div>
            <div class="discribe">
                <h3>营救人质战</h3>
                <div class="videotext">
                    营救人质战 人数看去多少人定制 分成两组 一个特种部队 一个恐怖分子 这个游戏适合 玩了对抗战以后开始（建议各个人五条命狙击手和人质一条命） 特种部队分成三组 指挥组 当然还是由指挥官担任 观察组
                    由狙击手担任 观察手负责报告位置 狙击手负责清理恐怖分子的巡逻人员 敌方狙击手 必要的时候清理挟持人质的恐怖分子 营救组 负责营救人质 保护人质的安全
                    这个环节营救组最困难因为营救组要潜伏进去不能惊动恐怖分子 一旦惊动了恐怖分子 恐怖分子就会挟持人质 营救任务会变的很麻烦 甚至影响到人质的生命安全(当然这个是假的就是为了游戏仿真）
                </div>
            </div>
        </div>
        <div class="editcontainer flex">
            <div class="videoBox">
                <video width="400" height="250" controls>
                    <source src="../assets/video/zuozhan3.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持 HTML5 video 标签。
                </video>
            </div>
            <div class="discribe">
                <h3> 反恐行动</h3>
                <div class="videotext">
                    一方扮演反恐精英，一方扮演恐怖分子，精英在规定的时间内有效合理地组织围困匪徒，解救人质，扮演匪徒一方对抗反恐精英，阻止其解救人质。恐怖分子的狙击手一定要先找到特种部队的狙击手
                    不然巡逻人员和看守人质的人员很容易被点名 最后是巡逻 一定要注意对方的突击营救人员 还有对方的狙击手 一不小心 先牺牲的就是巡逻人员 一般都是恐怖分子 提前十分钟或者十五分钟进入场地布置
                </div>
            </div>
        </div>
        <div class="editcontainer flex">
            <div class="videoBox">
                <video width="400" height="250" controls>
                    <source src="../assets/video/zuozhan2.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持 HTML5 video 标签。
                </video>
            </div>
            <div class="discribe">
                <h3>对抗玩法</h3>
                <div class="videotext">
                    般都是 分成两个组 看场地的大小 和规格做出决定 两边人投票选出带队的队长 然后各自小队选出狙击手 狙击观察手 观察手 突击手 每个人五条到十条命 狙击手一条命 但是狙击手可以一枪毙命
                    所以要小心狙击手 进去玩之前应该都会让看场地的(一般场地都不算太大) 然后根据各种地形布置战术 一般这个游戏有战术 才会好玩 赢得小队会感觉自豪 和团队团结精神 输的小队也会总结经验增强自我团结意识
                    比如 队长就应该带领一个 观察手 找一个隐蔽易观察制高点(没有制高点的情况下可以再阵地隐蔽易观察后方建立)指挥部 一般对抗玩法就是两方对抗 端掉敌方的指挥部 活着消灭所有人员为胜利
                </div>
            </div>
        </div>
        <div class="editcontainer flex">
            <div class="videoBox">
                <video width="400" height="250" controls>
                    <source src="../assets/video/zuozhan4.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    您的浏览器不支持 HTML5 video 标签。
                </video>
            </div>
            <div class="discribe">
                <h3>阵地争夺</h3>
                <div class="videotext">
                    平均分成两组，每人５条命。双方阵地各有一面旗子，在保存有生力量的情况下把对方的旗子夺过来，则该方取胜。狙击手和观察手尽量找到制高点 或者是 隐蔽易观察的敌方狙击敌方的狙击手和寻找敌方指挥部
                    还有就是狙击敌方的指挥官 突击手就负责突进 消灭敌方突击手 同时注意不要让敌方的狙击手给收了人头
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .flex {
        display: flex;
    }

    .editcontainer {
        width: 70%;
        margin: 20px auto 0px;
        background: rgba(0, 0, 0, 0.4);
        padding: 20px;
        color: #fff;

    }

    .discribe {
        padding: 30px;
        margin-left: 20px;
    }

    .videotext {
        line-height: 30px;
        text-indent: 2rem;
        margin-top: 20px;
    }
</style>