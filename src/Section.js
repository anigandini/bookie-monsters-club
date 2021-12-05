import classes from './Section.Module.css'
import { useEffect, useRef } from 'react'

const Section = props => {
    const section = useRef(null)
    const imageAlt = 'Issue ' + props.data.issue
    const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting === true)
                props.callBack(props.data)
        }, { threshold: [0.5] })    

    useEffect(() => {
        observer.observe(section.current)
      }, [])

    const getAvailability = () => {
        if (!props.data.isAvailable) {
            return <span>  is sold out.</span>
        }
    }

    const getOrderNow = () => {
        const isAvailable = props.data.isAvailable
        let orderNow = <><p className='order-now'>
                <button>BUY HERE</button>
            </p>
            <p className='order-now'>
                Or in <button>selected stores</button>.
            </p>
        </>
        if (!isAvailable) {
            orderNow = <p  className='order-now'>
                If you are lucky, you may get the last pieces in <button>selected stores</button>.
            </p>
        }
        return orderNow
    }

    return <section className={classes.section} ref={section}>
        <div>
            <img src={require(`./assets/${props.data.image}`).default} alt={imageAlt}/>
            <p>Issue #{props.data.issue} {getAvailability()}</p>         
            {getOrderNow()}
        </div>
    </section>
}

export default Section