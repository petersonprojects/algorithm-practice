
$(()=>{




    // $('#yahoo').click(()=>{
    //     console.log('yahoo')
    // })
    // $('#instagrams').click(()=>{
    //     console.log('instagrams')
    // })
    // $('#googles').click(()=>{
    //     console.log('googles')
    // })

    // this does the same thing only using 1 event listener...
    // event listeners are bad on performance, use as few as possible

    $('#parent').click((e)=>{

        if(e.target.id === 'yahoo')
        {
            console.log("yahoo")
        }
        if(e.target.id === 'googles')
        {
            console.log("googles")
        }
        if(e.target.id === 'instagrams')
        {
            console.log("instagrams")
        }

        let $anchor = $('<a>', {
            class: 'dc',
            text: 'Inside event listener using jQuery!',
            href: 'https://google.com/',
            target: '_blank'
        })

        $('#parent').append($anchor)
    })

})