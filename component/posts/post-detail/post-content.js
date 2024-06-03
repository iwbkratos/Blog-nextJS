import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import  atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('css',css)

function PostContent(props)
{
    const {post}=props;

    const imagePath=`/image/posts/${post.slug}/${post.image}`;

    const customRenderers={
        //   image(image){
        //       return<Image src={`/image/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
        //   },

          paragraph(paragraph){
            const { node } =paragraph;

            if(node.children[0].type==='image'){
                const image=node.children[0];

                return <div className={classes.image}>
                                  return<Image src={`/image/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300}/>

                </div>
            }
             return <p>{paragraph.children}</p>
          },

         code(code){
            const{language,value}=code;

            return(
                <SyntaxHighlighter 
                  style={atomDark}
                  language={language}
                  children={value}/>
            )
         } 

    }


    return <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
        <ReactMarkdown renderes={customRenderers}>{post.content}</ReactMarkdown>
    </article>
}

export default PostContent;