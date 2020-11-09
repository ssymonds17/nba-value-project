import React from 'react';
import '../styles/components/footer.scss';

export class Footer extends React.Component {

 render() {
  return (
   <div className="footer">
    <div className="footer-left-content">
     <p>NBA Value Reference</p>
    </div>
    <div className="footer-right-content">
     <p>Samuel Symonds &copy; {new Date().getFullYear()}</p>
    </div>
   </div>
  )
 }
}