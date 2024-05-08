$(document).ready(function () {
    $('#calendar').fullCalendar({
        eventColor: '#FFFFFF', // Sets background color for all events
        eventTextColor: '#000000', // Sets text color for all events
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2024-05-01',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        eventClick: function (event, jsEvent, view) {
            alert('Event: ' + event.title);
        },

        events: [
            {
                title: 'Rounds 1, 2 & 3 - Snetterton 300',
                start: '2024-05-25',
                end: '2024-05-26',
                description: 'Snetterton 300',
            },
            {
                title: 'Rounds 4, 5 & 6 - Oulton Park (Island)',
                start: '2024-06-22',
                end: '2024-06-23',
                description: 'Oulton Park (Island)',
            },
            {
                title: 'Rounds 7, 8 & 9 - Croft',
                start: '2024-07-27',
                end: '2024-07-28',
                description: 'Croft',
            },
            {
                title: 'Rounds 10, 11 & 12 - Donington Park (GP)',
                start: '2024-08-24',
                end: '2024-08-25',
                description: 'Donington Park (GP)',
            },
            {
                title: 'Rounds 13, 14 & 15 - Silverstone (National)',
                start: '2024-09-21',
                end: '2024-09-22',
                description: 'Silverstone (National)',
            },
            {
                title: 'Rounds 16, 17 & 18 - Brands Hatch (GP)',
                start: '2024-10-05',
                end: '2024-10-06',
                description: 'Brands Hatch (GP)',
            }
        ]
    })
})
