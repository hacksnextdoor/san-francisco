
export function inc(byN) {
  return {
    type: 'INC',
    payload: {
      count: byN
    }
  }
}
