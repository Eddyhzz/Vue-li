<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="">
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间: <span>2021-7-9</span></p>
          <p>上次登录地点: <span>惠州</span></p>
        </div>
      </el-card>
      <el-card style=" margin-top: 20px;">
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip
                           v-for="(val,key) in tableLabel"
                           :key="key"
                           :prop="key"
                           :label="val"
          >

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card shadow="hover"
                 v-for="item in countData"
                 :key="item.index"
                 :body-style="{display:'flex',padding: 0}">
            <i class="icon"
               :class="`el-icon-${item.icon}`"
               :style="{background: item.color}"></i>
            <div class="detail">
              <p class="num">￥{{item.value}}</p>
              <p class="txt">￥{{item.name}}</p>
            </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 280px" >
<!--        <div style="height: 280px" ref="chart"></div>-->
          <e-charts :chartData="echartData.order" style="height: 280px; width: 100%;"></e-charts>
      </el-card>
      <div class="graph">
        <el-card  shadow="hover" style="height: 260px">
          <div style="height: 240px;" ref="userEchart"></div>
        </el-card>
        <el-card  shadow="hover" style="height: 260px">
          <div style="height: 240px" ref="videoEchart"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import {getMenu} from '../../api/data'
import {getHome} from "../../api/data";
import * as echarts from "echarts";
import ECharts from "../../components/ECharts";
export default {
    name: "Home2",
    components:{
        ECharts
    },
    data(){
      return{
        userImg: require("../../assets/images/User.jpg"),
        tableData: [
          // {
          //   name: 'oppo',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
          // {
          //   name: 'vivo',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
          // {
          //   name: '苹果',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
          // {
          //   name: '小米',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
          // {
          //   name: '三星',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
          // {
          //   name: '魅族',
          //   todayBuy: 100,
          //   monthBuy: 300,
          //   totalBuy: 800,
          // },
        ],
        tableLabel: {
          name: '课程',
          todayBuy: '今日购买',
          monthBuy: '本月购买',
          totalBuy: '总购买',
        },
        countData:[
          {
            name: "今日支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "今日收藏订单",
            value: 210,
            icon: "star-on",
            color: "#ffb980",
          },
          {
            name: "今日未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
          },
          {
            name: "今日支付订单",
            value: 1234,
            icon: "success",
            color: "#2ec7c9",
          },
          {
            name: "今日收藏订单",
            value: 210,
            icon: "star-on",
            color: "#ffb980",
          },
          {
            name: "今日未支付订单",
            value: 1234,
            icon: "s-goods",
            color: "#5ab1ef",
          },
        ],
        echartsData: {
          order: {

          },
          user:{
            legend: {
              // 图例文字颜色
              textStyle: {
                color: "#333",
              },
            },
            grid: {
              left: "20%",
            },
            // 提示框
            tooltip: {
              trigger: "axis",
            },
            xAxis: {
              type: "category", //类目轴
              data: [],
              axisLine:{
                lineStyle: {
                  color: "#17b3a3",
                }
              },
              axisLabel: {
                interval: 0,
                color: "#333",
              },
            },
            yAxis: [
              {
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: "#17b3a3",
                  },
                },
              },
            ],
            color: ["#2ec7c9","#b6a2de"],
            series: [],
          },
          video: {
            tooltip: {
              trigger: "item",
            },
            color: [
              "#0f78f4",
              "#dd536b",
              "#9462e5",
              "#a6a6a6",
              "#e1bb22",
              "#39c362",
              "#3ed1cf",
            ],
            series: [],
          }
        },
        echartData:{
          order:{
            xData:[],
            series:[],
          },
          user: {
            xData:[],
            series:[],
          },
          video:{
            series:[],
          }
        }
      };
    },
    methods: {
      getTableData(){
          getHome().then((res) => {
            // console.log(res);
            this.tableData = res.data.tableData;

            // 折线图展示
            const order = res.data.orderData
            let keyArray = Object.keys(order.data[0]);

            // const myEchartsOrder = echarts.init(this.$refs.chart);
            // myEchartsOrder.setOption(this.echartsData.order)

            // 传给组件的值
            this.echartData.order.xData = order.date;
            keyArray.forEach((key) => {
              this.echartData.order.series.push({
                name: key,
                data: order.data.map((item) => item[key]),
                type: "line",
              });
            });

            // 用户图
            this.echartsData.user.xAxis.data = res.data.userData.map((item) => item.date);
            this.echartsData.user.series.push({
              name: "新增用户",
              data: res.data.userData.map((item) => item.new),
              type: "bar"
            });
            this.echartsData.user.series.push({
              name: "活跃用户",
              data: res.data.userData.map((item) => item.active),
              type: "bar"
            });
            const myEchartsUser = echarts.init(this.$refs.userEchart);
            myEchartsUser.setOption(this.echartsData.user)

            // 饼状图
            this.echartsData.video.series.push({
              data: res.data.videoData,
              type: "pie",
            });

            const myEchartsVideo = echarts.init(this.$refs.videoEchart);
            myEchartsVideo.setOption(this.echartsData.video)
          });
      }
    },
    mounted() {
        // getHome().then((res) => {
        //   console.log(res);
        // })
      this.getTableData()
    }
  }
</script>

<style scoped>
  .home .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }

  .home img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }

  .home .user .userInfo .name{
      font-size: 32px;
      margin-bottom: 10px;
  }
  .home .user .userInfo .access{
    color: #999999;
  }

  .login-info p{
    line-height: 28px;
    font-size: 14px;
    color: #999999;
  }

  .login-info p span{
    color: #666666;
    margin-left: 60px;
  }

  .num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  .num .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .num .icon{
    font-size: 30px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }

  .num .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .num .detail .num{
    font-size: 30px;
    margin-bottom: 10px;
  }

  .num .detail .txt {
    font-size: 14px;
    text-align: center;
    color: #999999;
  }

  .graph{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .graph .el-card{
    width: 48%;
  }


</style>