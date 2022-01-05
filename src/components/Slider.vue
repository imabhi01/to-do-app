<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
                <img :src="currentImg" alt="">
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#"><font-awesome-icon icon="chevron-left"></font-awesome-icon></a>
        <a class="next" @click="next" href="#"> <font-awesome-icon icon="chevron-right"></font-awesome-icon></a>
    </div>
</template>

<script>
export default{
    name: 'Slider',
    data(){
        return {
            images: [
                "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
                "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
                "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
                "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
            ],
            timer: null,
            currentIndex:0 
        }
    },
    mounted: function(){
            this.startSlide();
    },
    methods:{
        startSlide : function(){
            this.timer = setInterval(this.next, 40000)
        },
        next: function(){
            this.currentIndex++
        },
        prev : function(){
            this.currentIndex--
        }
    },
    computed:{
        currentImg: function() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    }
    
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgb(80 115 97 / 90%);
}
</style>