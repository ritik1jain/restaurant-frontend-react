import React from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link } from 'react-router-dom';


function DishDetail(props)
{
    let dish=props.dish;
    let comm;

if(dish!=null){
    comm=props.comments.map((idx) => {
        return (
        <li key={idx.id} className="list-unstyled">
            <p>{idx.comment}</p>
            <p><span>-- </span>{idx.author}<span>, </span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(idx.date)))}</p>
        </li>
        );
    })
    return(
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>

                </div>
                
        <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                     <CardImg top src={dish.image} alt={dish.name} />
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
             </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                
                <h3>Comments</h3>
                <div list>

                    {comm}
                </div>
            </div>
        </div>
        </div>
    );
        }
        else{
            return(<div></div>);
        }
   
}
    

export default DishDetail;