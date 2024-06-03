import classes from './hero.module.css'
import Image from 'next/image';
function Hero()
{
   return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/image/site/cr7.jpg' alt='An image showing ronaldo' width={300} height={300}/>
        </div>
        <h1>Hello, I'm Cristiano Ronaldo.</h1>
        <p>
            I blog about web devolopment-especially frontend frameworks like Angular or React.
        </p>
    </section>
   )
}
export default Hero;