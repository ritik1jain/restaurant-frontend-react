import React, {Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);


    };

render(){
    let dish=this.props.dishdetails;
    let comm;

if(dish!=null){
    comm=dish.comments.map((idx) => {
        return (
        <li key={idx.id} className="list-unstyled">
            <p>{idx.comment}</p>
            <p><span>-- </span>{idx.author}<span>, </span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(idx.date)))}</p>
        </li>
        );
    })
    return(
        
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
    );
        }
        else{
            return(<div></div>);
        }
    
};

                            
    

}

export default DishDetail;