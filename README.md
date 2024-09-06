# Billboard API

## Overview

This Billboard API provides endpoints for:

- Getting billboard's dashboard data of Hot 100, Billboard 200, Billboard Global 200, Artist 100, Billboard Tiktok 50

## Base URL

All API requests are made to the following base URL:

## Endpoints

### 1. Get Billboard's charts

#### Hot 100

- **Endpoint:** `/hot-100`
- **Method:** `GET`
- **Description:** Get Billboard Hot 100 chart.
- **Response:**

  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "img": "Song Image"
  }
  ```

#### Billboard 200

- **Endpoint:** `/billboard-200`
- **Method:** `GET`
- **Description:** Get Billboard 200 chart.
- **Response:**

  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "img": "Song Image"
  }
  ```

#### Billboard Global 200

- **Endpoint:** `/billboard-blobal-200`
- **Method:** `GET`
- **Description:** Get Billboard Global 200 chart.
- **Response:**

  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "img": "Song Image"
  }
  ```

#### Billboard Titkok 50

- **Endpoint:** `/billboard-titkok-50`
- **Method:** `GET`
- **Description:** Get Billboard Titkok 50 chart.
- **Response:**

  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "img": "Song Image"
  }
  ```

#### Billboard Artist 100

- **Endpoint:** `/artist-100`
- **Method:** `GET`
- **Description:** Get Billboard Artist 100 chart.
- **Response:**

  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "img": "Song Image"
  }
  ```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. Here are some common responses:

- `200 OK` - The request was successful.
- `201 Created` - The resource was successfully created.
- `204 No Content` - The request was successful but there is no content to return.
- `400 Bad Request` - The request was invalid or cannot be processed.
- `401 Unauthorized` - Authentication failed or user does not have permissions.
- `404 Not Found` - The requested resource could not be found.
- `500 Internal Server Error` - An error occurred on the server.
