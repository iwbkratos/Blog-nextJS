import { Fragment } from "react";
import Head from "next/head";
import Hero from "../component/home-page/hero";
import FeaturedPosts from "../component/home-page/featured-posts";
import {  getFeaturedPosts } from "../lib/posts-util";


function HomePage(props)
{
   return (
    <Fragment>
        <Head>
            <title>CR7 Blog</title>
            <meta name="description"
             content="I post about programming and web development."/>
        </Head>
        <Hero/>
        <FeaturedPosts posts={props.posts}/>
    </Fragment>
   )
}


export  function getStaticProps()
{
    const featuredPosts=getFeaturedPosts();

    return {
        props:{
            posts:featuredPosts,
        }
    }
}
export default HomePage;