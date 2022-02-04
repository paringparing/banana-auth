import React from 'react'

const TeamMember: React.FC<{ pfp: string; nick: string }> = ({ pfp, nick }) => {
    return (
        <div style={{ marginRight: 48 }}>
            <img src={pfp} style={{ width: 256, height: 256, borderRadius: 128 }} alt="" />
            <div style={{ width: 256, marginTop: 36, padding: 8, textAlign: 'center', borderRadius: 8, background: 'rgba(255,255,255,0.4)' }}>{nick}</div>
        </div>
    )
}

export default TeamMember
