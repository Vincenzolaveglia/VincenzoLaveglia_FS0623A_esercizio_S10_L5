import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const MyFooter = () => {
    return (
        <>
            <footer className='bg-dark text-center text-light'>
                <p className='pt-2'>Seguici su:</p>
                <div className="container pb-0">
                    <section className="mb-1">
                        <span className="fs-3 px-2">
                            <BsFacebook />
                        </span>
                        <span className="fs-3 px-2">
                            <BsInstagram />
                        </span>
                        <span className="fs-3 px-2">
                            <BsTwitter />
                        </span>
                        <span className="fs-3 px-2">
                            <BsFacebook />
                        </span>
                    </section>
                </div>

                <div>
                    &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </>
    )
}

export default MyFooter;