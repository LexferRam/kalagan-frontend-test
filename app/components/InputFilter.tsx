import { Podcast } from '@/interface'
import { Chip, TextField } from '@mui/material'

interface IInputFilter{ 
    filteredPodcasts: Podcast[], 
    filter: string, 
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

const InputFilter = ({ filteredPodcasts, filter, setFilter }: IInputFilter) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 20,
                marginTop: 100,
                marginRight: 20
            }}
        >
            <Chip label={filteredPodcasts.length} color="primary" />
            <TextField
                value={filter}
                variant="outlined"
                onChange={(e) => setFilter(e.target.value)}
                type='text'
                placeholder='Filter podcasts...'
                style={{
                    width: 350
                }}
            />
        </div>
    )
}

export default InputFilter