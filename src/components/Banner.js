import Button from './Button';

function Banner(props) {
    return (
        <section>
            <div className='banner'>
                <h1 className="bannerTitle">{props.bannerTitle}</h1>
                <p>{props.bannerText}</p>
                <div className='btn'>
                    <Button firstButtonText={props.secondaryButtonName} 
                            secondButtonText={props.primaryButtonName} 
                            firstButton={props.primaryButtonStyle}
                            secondButton={props.secondaryButtonStyle} />
                </div>
            </div>
        </section>
    );
}

export default Banner;