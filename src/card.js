import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import reportWebVitals from './reportWebVitals';

function Main() {
    return (
        <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out">BUTTON</button>
                </div>
            </div>
        </div>
    )

}
export default Main;