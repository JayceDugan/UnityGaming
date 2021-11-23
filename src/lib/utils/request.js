async function request(endpoint, { body, ...customConfig } = {}) {
  const defaultHeaders = { 'Content-Type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...defaultHeaders,
      ...customConfig.headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await window.fetch(endpoint, config);

    if (response.ok) return await response.json();

    throw response;
  } catch (err) {
    return Promise.reject(err);
  }
}

/* eslint-disable */
const requestAction = (method, hasBody = false) => {
  if (hasBody) return (endpoint, body, customConfig = {}) => request(endpoint, { ...customConfig, body, method });

  return (endpoint, customConfig = {}) => request(endpoint, { ...customConfig, method });
}

request.get = requestAction('GET')
request.post = requestAction('POST', true)
request.put = requestAction('PUT', true)
request.delete = requestAction('DELETE', true)

export default request;
