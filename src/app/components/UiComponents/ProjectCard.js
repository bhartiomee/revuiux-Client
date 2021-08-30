import React from 'react'
import styled from 'styled-components'
import '../css/Common.css'

const CardWrapper = styled.div`
    margin: 1%;
    height: 12.5rem;
    width: 20rem;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
`

const CardDetails = styled.div`
    margin: 2%;
    
    p{
       margin: 0;
       font-size: .8rem;
    }
    h3{
        margin 0;
       // padding:5px 0 0 10px;
        font-size:1rem;
    }
`
export default function ProjectCard(props) {
    const { id, title, isPublished, addEditProduct , isResearcher,isParticipant } = props;

    const stateOfProduct = isPublished ? 'Published' : 'Draft';

    const handleClick = () => {
        // if(addEditProduct && isResearcher){
            addEditProduct({id, title})
        // }
    }

    return (
        <CardWrapper onClick={handleClick}>
            <div className="card-image"><img src={'https://picsum.photos/500/300?random='+(Math.random())}></img></div>
            <CardDetails>
                <h3>{title}</h3>
                {/* <p>{stateOfProduct}</p> */}
                {!isParticipant &&(<p>{stateOfProduct}</p>)}
            </CardDetails>
        </CardWrapper>
    )
}
