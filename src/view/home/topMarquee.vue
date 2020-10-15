<template>
    <div class="topmarquee">
    <Carousel autoplay loop dots="none" :autoplay-speed="3000" arrow="never" :height="700">
            <CarouselItem>
                <img src="../../assets/images/home_images/轮播图1.png" />
            </CarouselItem>
            <CarouselItem>
                <img src="../../assets/images/home_images/astronomy.jpg" />
            </CarouselItem>
            <CarouselItem>
                <img src="../../assets/images/home_images/bubbles.jpg" />
            </CarouselItem>
            <CarouselItem>
                <img src="../../assets/images/home_images/fog.jpg" />
            </CarouselItem>
            <CarouselItem>
                <img src="../../assets/images/home_images/dark.jpg" />
            </CarouselItem>
        </Carousel>
        </div>
</template>

<script>
export default {
    name: 'topMarquee'
}
</script>

<style lang="less">
@import './topMarquee.less';
</style>
