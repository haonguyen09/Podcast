import React from 'react'

const HeartIcon = ({ isLiked, onClick }) => {
    return (
        <svg onClick={onClick} style={{ cursor: 'pointer', fill: isLiked ? '#6e5fd3' : '#757D8A' }}
            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01835 5.00004C5.29835 5.00004 4.62335 5.27837 4.11835 5.78421C3.07002 6.83421 3.07002 8.54337 4.11919 9.59504L10.0017 15.4875L15.885 9.59504C16.9342 8.54337 16.9342 6.83421 15.885 5.78421C14.875 4.77171 13.095 4.77337 12.085 5.78421L10.5917 7.28004C10.2784 7.59421 9.72502 7.59421 9.41169 7.28004L7.91835 5.78337C7.41335 5.27837 6.73919 5.00004 6.01835 5.00004ZM10.0017 17.5C9.78085 17.5 9.56835 17.4125 9.41252 17.255L2.93919 10.7717C1.24252 9.07171 1.24252 6.30587 2.93919 4.60587C3.75919 3.78587 4.85252 3.33337 6.01835 3.33337C7.18419 3.33337 8.27835 3.78587 9.09752 4.60587L10.0017 5.51171L10.9059 4.60671C11.7259 3.78587 12.8192 3.33337 13.9859 3.33337C15.1509 3.33337 16.245 3.78587 17.0642 4.60587C18.7617 6.30587 18.7617 9.07171 17.065 10.7717L10.5917 17.2559C10.435 17.4125 10.2234 17.5 10.0017 17.5Z"  fill={ isLiked ? '#6e5fd3' : '#757D8A'} stroke="#A6A7B2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default HeartIcon