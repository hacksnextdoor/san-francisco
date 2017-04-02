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
