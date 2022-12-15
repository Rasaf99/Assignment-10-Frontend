

import './style.css'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const question_answer_array = [

    {
        question: "what is cors?",
        answer: "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a preflight request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request."
    },

    {
        question: "Why are you using firebase? What other options do you have to implement authentication",
        answer: "I am using firebase for authentication. Instead of firebase, I could made authentication system with the help of Express framework."
    },


    {
        question: "How does the private route work?",
        answer: "Private route helps to protect components which should be visited after authentication, also protects component which should be visited after authorization."
    },

    {
      question: "What is Node? How does Node work?",
      answer: "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node took a slightly different approach to handling multiple concurrent requests at the same time if you compare it to some other popular servers like Apache. Spawning a new thread for each request is expensive. Also, threads are doing nothing when awaiting other operations’ result (i.e.: database read). That’s why Node is using one thread instead. Such an approach has numerous advantages. No overhead comes with creating new threads. Also, your code is much easier to reason about, as you don’t have to worry about what will happen if two threads access the same variable. It’s because that simply cannot happen. There are some drawbacks as well. Node isn’t the best choice for applications that mostly deal with CPU intensive computing. On the other hand, it excels at handling multiple I/O requests."
  }


]




const accordion_css = {

  
}


const icon_css = {

  
}


export default function BLOG() {
  return (

   <div className='question_answer_component'>

     <h3  style={{marginBottom:'2rem'}}>Frequently Asked questions in the Interview</h3>

      <div className='question_answer_wrapper'>

        {

          question_answer_array.map((item)=> {

            return (
                <Accordion sx={{backgroundColor:'hsl(0, 0%, 14%)', 
                color: 'hsl(0, 0%, 95%)'}}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon  sx={{color: 'hsl(0, 0%, 95%)'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{textAlign:'center'}}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{backgroundColor:'hsl(0, 0%, 19%)'}}>
                    <Typography sx={{textAlign:'center'}}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            )

          })

        }

      
      
      </div>

    </div>
  );
}
