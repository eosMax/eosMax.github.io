<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.overflowHidden{
	overflow: hidden !important;
}

body,html{
	height: 100%;
	margin: 0;
	padding: 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

input{
	outline: none;
}

h6,p{
	margin: 0;
	padding: 0;
}

.pdnone{padding: 0;}

.center{
	width: 1100px;
	margin: 0 auto;
}

.flex{
	display: flex;
}

.betweenflex{
	display: flex;
	justify-content: space-between;
}

.flex_start{display: flex; justify-content: flex-start;}
.flex_start_v{display: flex; justify-content: flex-start; align-items: center;}
.flex_end{display: flex; justify-content: flex-end;}               
.flex_end_v{display: flex; justify-content: flex-end; align-items: center;}  
.flex_between{display: flex; justify-content: space-between;}
.flex_between_v{display: flex; justify-content: space-between; align-items: center;}
.flex_around{display: flex; justify-content: space-around;}
.flex_around_v{display: flex; justify-content: space-around; align-items: center;}
.flex_center{display: flex; justify-content: center;}
.vertical_v{display: flex; align-items: center;}
.weui-switch, .weui-switch-cp__box{
		 width: 40px !important;
	    height: 20px !important;
}
.weui-switch:before, .weui-switch-cp__box:before{
	    width: 40px !important;
	    height: 20px !important;
}
.weui-switch:after, .weui-switch-cp__box:after{
	     width:20px !important;
   		 height:20px !important;
   		 top:-1px !important;
}
</style>
