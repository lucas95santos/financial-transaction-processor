import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// eslint-disable-next-line @typescript-eslint/require-await
export const hello = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Amz-Security-Token,X-Amz-User-Agent',
      'X-Frame-Options': 'deny',
      'X-Content-Type-Options': 'nonsniff',
      'Referrer-Policy': 'origin-when-cross-origin',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Security-Policy': "default-src 'self'",
      'Strict-Transport-Security': 'max-age=64072000; includeSubDomains; preload',
    },
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world',
    }),
  };
};
