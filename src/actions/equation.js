const showEquation = equationContent => {
    return {
        type: 'SHOW_EQUATION',
        payload: equationContent
    };
}

export { showEquation };