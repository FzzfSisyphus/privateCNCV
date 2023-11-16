<script setup>
import { NSpace,NCard,NDivider,NButton} from 'naive-ui';
import { useRouter } from "vue-router";


const router = useRouter()

function jumpZk() {
    router.push('/zk');
}
function jumphomo() {
    router.push('/homo');
}

function jumpOne(){
    
    window.location.href = 'https://arxiv.org/pdf/2310.13328';
}
const link = "https://arxiv.org/pdf/2310.13328"
</script>


<template>
    <n-divider />
    <div class="container">
        <n-space vertical class="timeline">
            <div class="divTitle">研究经历</div>
            <n-card size="huge" hoverable @click="jumpZk">
                <div class="title">
                    ZK-Rollups for Scaling Blockchains: Foundations and Architectures
                </div>
                <n-space vertical class="content">
                    <div class="position" >荣誉学位研究项目 </div> 
                    <div>在Sushmita Ruj 教授指导下，对区块链的交易速度瓶颈问题进行研究</div>
                    <div>收集整理区块链扩容的多个解决方案包括BitcoinNG、Conflux、Plasma、Lightning Network 等</div>
                    <div>详细分析零知识证明的实现方法,分析对比了SNARK下的PlonK，Groth16，STARK，Sonic等算法，及各自瓶颈，分析zkEVM和CirC两个未来有潜力研究方向</div>
                    <div>荣获Thesis Showcase 2022  即2022优秀研究项目展示会</div>
                </n-space>            
            </n-card> 
            
            <n-card size="huge" hoverable @click="jumpOne">
                <div class="title">One-Phase Batch Update on Sparse Merkle Trees for Rollups</div>
                <n-space vertical class="content">
                    <div class="position">联合作者  </div> 
                    <div>提出了一种针对稀疏梅克尔树的更高效更新算法</div>                      
                    <div>总结Rollups领域当下研究方向， 分析了zkSync,Plasma 等 Rollups项目中Merkle Tree的使用方法</div>                     
                    <div>发表在 THE 7th SYMPOSIUM ON DISTRIBUTED LEDGER TECHNOLOGY (SDLT)</div>
                    <n-button text :href="link">Arxiv链接</n-button>
                </n-space>         
            </n-card> 
    
            
            <n-card size="huge" hoverable @click="jumphomo">
                <div class="title"> Use Homomorphic Encryption to solve Byzantine Generals Problem</div>
                <n-space vertical class="content">
                    <div class="position">高级算法课程项目</div>
                    <div>独立提出并验证利用同态加密解决拜占庭将军问题的算法</div>
                    <div>实现了具体算法，并调整信息传递顺序降低复杂度，以及使用gmpy2加速大数运算优化了速度</div>
                </n-space>
            </n-card> 

        </n-space>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center;
}
.timeline{
    width:90%
}
.title{
    font-size: 20px;
}
.position{
    font-size:18px;

}
.content{
    font-size: 16px;
}
</style>