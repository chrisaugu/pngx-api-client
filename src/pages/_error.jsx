import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {Button, Display, Page, Text, Link} from "@geist-ui/core";

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;