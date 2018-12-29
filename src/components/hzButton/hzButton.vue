<template>
    <a class="hz-button" :style="{ backgroundColor: bgColor,color: color}" >
        按钮
    </a>
</template>

<script>
    export default {
        name: "hzButton",
        props:{
            bgColor:{
                type:String,
            },
            color:{
                type:String,
            }
        }
    }
</script>

<style lang="less" scoped>
    .hz-button {
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        padding-right: 14px;
        padding-top:4px;
        padding-bottom:4px;
        box-sizing: border-box;
        font-size: 16px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        line-height: 2.33333333;
        border-radius: 5px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        overflow: hidden;
        &:after {
            content: " ";
            width: 200%;
            height: 200%;
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, .2);
            -webkit-transform: scale(.5);
            -ms-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            transform-origin: 0 0;
            box-sizing: border-box;
            border-radius: 10px;
        }
    }

</style>
