function calculateMemberTime(joinedTimestamp) {
    const now = Date.now(); // timestamp atual em ms
    const diffMs = now - joinedTimestamp; // diferença em milissegundos

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return { days: diffDays, hours: diffHours, minutes: diffMinutes };
}

module.exports = calculateMemberTime;