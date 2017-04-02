export function inc(byN) {
  return {
    type: 'INC',
    payload: {
      count: byN
    }
  }
}

export function dec(byN) {
  return {
    type: 'DEC',
    payload: {
      count: byN
    }
  }
}

export function fetchMockUser() {
  return {
    type: 'FETCH_MOCK_USER',
    payload: {
      name: 'Hugh',
      age: '24'
    }
  }
}
