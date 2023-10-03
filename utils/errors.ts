/* eslint-disable import/no-anonymous-default-export */
import Error from "next/error";
import { NextResponse } from "next/server";

const base = (message: string, status = 400) => NextResponse.json(
  {
    message,
  },
  {
    status,
  }
)

const server = () => NextResponse.json(
  {
    message: 'Internal server error',
  },
  {
    status: 500,
  },
)

const request = (errors: Error) => NextResponse.json(
  {
    errors,
    message: 'Invalid request',
  },
  {
    status: 400,
  }
)

const authorization = () => NextResponse.json(
  {
    message: 'You are not authenticated',
  },
  {
    status: 401,
  }
)

const unauthorized = () => NextResponse.json(
  {
    message: 'You do not have permission to run this service.'
  },
  {
    status: 403,
  }
)

export default {
  base,
  server,
  request,
  authorization,
  unauthorized,
}