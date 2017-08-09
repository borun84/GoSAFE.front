export const togglePanel = condition => {
    return {
        type: 'TOGGLE_PANEL',
        payload: !condition
    }
}

export const toggleAbout = condition => {
    return {
        type: 'TOGGLE_ABOUT',
        payload: !condition
    }
}

export const toggleLayers = condition => {
    return {
        type: 'TOGGLE_LAYERS',
        payload: !condition
    }
}

export const toggleFeatureInfo = condition => {
    return {
        type: 'TOGGLE_FEATUREINFO',
        payload: !condition
    }
}

export const toggleStatistics = condition => {
    return {
        type: 'TOGGLE_STATISTICS',
        payload: !condition
    }
}