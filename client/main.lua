RegisterCommand('showNui', function()
    SendNUIMessage({
        app = 'RESOURCENAME',
        method = 'FUNCTIONNAME', -- This method need to be the same as used on useNuiEvent hook.
        data = true
    })
end, false)