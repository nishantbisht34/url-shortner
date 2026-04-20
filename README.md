# URL Shortener Service

This project implements a **URL shortener service** that converts long URLs into compact, shareable links and tracks their usage. 

## Features

- **Generate Short URLs**: Accepts a valid long URL via API and returns a shortened version in the format `example.com/random-id`. 
- **Redirect Functionality**: When a shortened URL is accessed, the service redirects the user to the original long URL.
- **Analytics Tracking**: Keeps a record of total visits or clicks on each shortened link. 

## API Routes

| Method | Route | Description |
|--------|------|-------------|
| `POST` | `/url` | Generates a new short URL from a provided long URL. Returns the shortened URL. |
| `GET`  | `/id` | Redirects the user to the original long URL associated with the given short ID. |
| `GET`  | `/url/analytics/id` | Returns analytics data, including the total number of clicks for the specified short ID. |

