<template>
  <div class="verification">
  		<div class="top">
	  		<div class="title">
	  				EOSMax - Game Verification Script
	  		</div>
	  		<div class="info">
	  				Third part script used to verify games on EOSMax 
	  		</div>
  		</div>
  		<div class="content" v-if="verData">
  				<div class="line">
  						<label>betid:</label>
  						<span>{{verData.bet_id}}</span>
  				</div>
  				<div class="line">
  						<label>playerSeed:</label>
  						<span>{{verData.combine_seed?verData.combine_seed.split(':')[1]:''}}</span>
  				</div>
  				<div class="line">
  						<label>time stamp:</label>
  						<span>{{verData.combine_seed?verData.combine_seed.split(':')[2]:''}}</span>
  				</div>
  				<div class="line">
  						<label>combine_seed:</label>
  						<span>{{verData.combine_seed?verData.combine_seed:''}}</span>
  				</div>
  				<div class="line">
  						<label>combine_seed<br />(hash):</label>
  						<span>{{verData.hash?verData.hash:''}}</span>
  				</div>
  				<div class="line">
  						<label>public key:</label>
  						<span>{{verData.publicKey}}</span>
  				</div>
  				<div class="line">
  						<label>sign:</label>
  						<span>{{verData.sig}}</span>
  				</div>
  				<div class="line">
  						<label>formula:</label>
  						<span v-if="verData.lucky_fruit">(postfix6(sha256(sign(sha256(betid+palyerseed+timestamp))) Mod 24)+1</span>
  						<span v-else>(postfix6(sha256(sign(sha256(betid+palyerseed+timestamp))) Mod 100)+1</span>
  				</div>
  				<div class="btn" @click="verify">
  						Verify
  				</div>
  				
  				<div class="result" v-if="result">
  						<div class="line">
  						<label>sha256(sig):</label>
  						<span>{{sha256}}</span>
		  				</div>
		  				<div class="line">
		  						<label>last 6 digits:</label>
		  						<span>{{lastSixNum}}({{parseInt(lastSixNum,16)}})</span>
		  				</div>
		  				<div class="line">
		  						<label>lucky number:</label>
		  						<span>{{luckNum}}<span class="fruit" v-if="verData.lucky_fruit"><img :src="fruit[luckNum]" /></span></span>
		  				</div>
  				</div>
  		</div>
  </div>
</template>

<script>
import Eos from 'eosjs'
import ecc from 'eosjs-ecc';
import apple from '../../static/images/pic_apple.png';
import orange from '../../static/images/pic_orange.png';
import mongo from '../../static/images/pic_mongo.png';
import watermelon from '../../static/images/pic_watermelon.png';
import star from '../../static/images/pic_star.png';
import seven from '../../static/images/pic_seven.png';
import bar from '../../static/images/pic_bar.png';
	

export default {
  name: 'verification',
  data () {
    return {
     		verData:{},
     		result:false,
     		fruit:{
     			1:seven,
     			2:apple,
     			3:orange,
     			4:bar,
     			5:mongo,
     			6:orange,
     			7:apple,
     			8:star,
     			9:apple,
     			10:mongo,
     			11:watermelon,
     			12:apple,
     			13:seven,
     			14:apple,
     			15:orange,
     			16:watermelon,
     			17:mongo,
     			18:orange,
     			19:apple,
     			20:star,
     			21:apple,
     			22:mongo,
     			23:watermelon,
     			24:orange
     		},
     		publicKey:"",
   			sha256:'',
   			lastSixNum:'',
   			luckNum:''
    }
  },
  created(){
  		
			if(this.$route.query && this.$route.query.data){
				this.verData=JSON.parse(this.$route.query.data);
				//console.log(this.verData)
			}
  },
  methods: {
  	verify(){
  			let that=this;
  			this.sha256= ecc.sha256(this.verData.sig);
  			this.lastSixNum=this.sha256.substr(this.sha256.length-6,6);
  			if(this.verData.lucky_fruit){
  				this.luckNum=parseInt(this.lastSixNum,16)%24+1;
  			}else{
  				this.luckNum=parseInt(this.lastSixNum,16)%100+1;
  			}
	  	  this.result=ecc.verify(this.verData.sig,this.verData.combine_seed,this.verData.publicKey);
  	}
  }
}
</script>

<style scoped="scoped" lang="less">
		.verification{
				background: #fff;
				margin: 0 auto;
				padding: 10px;
				width: 80%;
				text-align: left;
				.top{
					font-size: 30px;
					padding: 20px 0;
					color:#333;
					border-bottom:1px solid #dbdbdb;
					.info{
						font-size: 20px;
						color: #666;
					}
				}
				.content{
						padding: 30px 0;
						font-size: 24px;
						.line{
							padding: 10px 0 6px;
							border-bottom:1px solid #dbdbdb;
							label{
								display: inline-block;
								width:18%;
							}
							span{
								display: inline-block;
								width: 80%;
								vertical-align: middle;
								word-break: break-all;
							}
							.fruit{
								margin-left: 10px;
								color: #ffb400;
								img{
									width: 0.6rem;
								}
							}
						}
						.btn{
							margin-top: 20px;
							font-size:30px;
							color: #fff;
							width: 198px;
							height:44px;
							line-height:44px;
							text-align: center;
							background: #ff4547;
							border-radius: 8px;
							cursor: pointer;
						}
				}
		}
</style>