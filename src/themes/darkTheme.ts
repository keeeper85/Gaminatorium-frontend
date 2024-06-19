import {createTheme, Theme} from "@mui/material";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ada from  '../../tailwind.config.js'

const darkTheme: Theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                            backgroundColor: ada.theme.extend.colors.red,
                            color: ada.theme.extend.colors.gray,
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: ada.theme.extend.colors.red,
                            fontFamily: ada.theme.fontFamily.inknut,
                            '&:hover': {
                                backgroundColor: ada.theme.extend.colors.black,
                            }
                        }),
                }),
            },
        },
    },
});

export default darkTheme