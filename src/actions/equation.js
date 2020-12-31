const showEquation = equation => {
    return {
        type: 'SHOW_EQUATION',
        payload: equation
    };
}

export { showEquation };