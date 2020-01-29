export const getCoordinates = async () => {
  try {
    const response = await fetch()
    if ( !response.ok ) {
      throw new Error('There was an error getting your coordinates');
    }
    return response.json();
  } catch {

  }
}
