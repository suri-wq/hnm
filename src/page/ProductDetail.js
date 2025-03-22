import React, { useEffect, useState} from 'react'
import { Container, Row, Col, Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail=async()=>{
        let url=`https://my-json-server.typicode.com/suri-wq/hnm/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setProduct(data)
    }
    useEffect(()=>{
        getProductDetail()
    },[])
  return (
    <Container>
        <Row>
            <Col sm={8} className='product-img'>
                <img src={product?.img}  />
                
            </Col>
            <Col sm={4} className='product-detail'>
                <div>
                    <h3>{product?.title}</h3>
                </div>
                <div>
                    <h5>₩{product?.price}</h5>
                </div>
                <div>
                    <h6>{product?.choice==true?"conscious choice":""}</h6>
                </div>
                <div>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="light">사이즈 선택</Button>

                        <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='add-button-area'>
                <Button variant='dark'>추가</Button>

                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail