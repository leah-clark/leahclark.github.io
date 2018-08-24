import React, { Component } from 'react';
import Black from "../resources/black_page.jpg"
import "./news.css"
import FacebookPage from "./FacebookPage";
import ErrorBoundary from "../utils/ErrorBoundary";


class News extends Component {
    render() {
        return (
            <div className="News">
                <ErrorBoundary>
                <FacebookPage />
                </ErrorBoundary>
            </div>
        );
    }
}

export default  News;




