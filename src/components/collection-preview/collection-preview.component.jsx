import React, {useState} from 'react';
import hospital from '../../assets/hospital.png'
import './collection-preview.styles.scss';
import diabetes from '../../assets/diabetes.jpg'
import starOn from '../../assets/img-start-on.svg'
import pinBlue from '../../assets/img-icon-pin-blue.svg'
import Header from '../header/header.component';
import Sidebar from '../sidebar';


const CollectionPreview = ({ title, alamat, size, namaPaket, detail, promo, hargaAwal, hargaAkhir}) => {
    const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
            setIsOpen(!isOpen)
        }

    return (
    <div className='collection-preview'>
        <div className='header-shop'>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
        </div>
        <div className='artikel'>
            <img src={diabetes} alt=""/>
            <h1>{namaPaket}</h1>
            <p>Informasi detil</p>
            <p>{detail}</p>
        </div>
        <div 
        className={`${size} menu-item`}
        >
            <div className="content">
                <div className='tombol'>
                    <h4>{namaPaket}</h4>
                </div>
                <div className='detail'>
                    <div className='image'>
                        <img src={hospital} alt=""/>
                    </div>
                    <div className='details'>
                        <h1 className="tittle">{title}</h1>
                        <p><img src={starOn} alt=""/>4.8</p>
                        <h3 className="alamat">{alamat}</h3>
                        <a href="/"><img src={pinBlue} alt=""/> Lihat peta</a>
                    </div>
                </div>
                <div className='review'>
                    <ul>
                        <li>Tidak bisa reschedule</li>
                        <li>Tidak bisa refund</li>
                    </ul>
                </div>
            </div>
            <div className='harga'>
                <p>{promo}</p>
                <h3>{hargaAwal}</h3>
                <hr/>
                <h1>{hargaAkhir}</h1>
                <button>Pesan Sekarang</button>
            </div>
        </div>
    </div>
    )
};

export default CollectionPreview;



