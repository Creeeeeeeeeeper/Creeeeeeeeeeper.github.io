const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    preload: 'metadata',
    audio: [
        {
            name: 'Without You (Explicit)',
            artist: 'Avicii/Sadro Cavazza',
            url: 'https://down-load.lanrar.com/file/?VTNQbgg5AzICCwoyAzYCbgM8UGhfVwZtBHcBbwU2VSFQJAAOWWtSc1UrCxhTfwBxV2FVOV5iUToLeFN8XC4BbVUlUDQIcwMxAj0KMAMyAlwDMFAxXz0GNQQ6ATcFbVVnUGcAYFk2UjJVJQs7U3QAPFc6VWFeOFFgCz5TbVwwASZVJVB3CGgDZQJkCm4DYwIsA2lQYl8vBjUEMAEoBWFVMlAzADJZPVIwVWYLalMwADNXOVVgXjJRYQs0U2JcZgEwVTFQMghnA28CMgppAzUCYQNqUGxfZgZnBDABYgV3VTlQIABkWSJSc1VwCzhTdQBoV2lVbV4zUWQLO1NsXDgBNVVnUCEIIQM+AjkKOQMxAj4DaFBiXzIGNAQ7ATEFblVmUGQAZVkqUihVJQs7U2sAdlcwVWBeJ1EmC3xTIlw9ATFVYlA1CGUDbwJiCmkDYAI0A2FQc191Bm0EcwE6BWtVZlBjAHlZM1I/VS0Lb1MzADNXI1VhXjBRZQsiU3NcZAFvVSJQaQgKAzQCPwphA2c=',
            cover: '//y.qq.com/music/photo_new/T002R300x300M000003KjODP2FwTHe_2.jpg?max_age=2592000',
        },
        {
            name: 'The Nights',
            artist: 'Avicii',
            url: 'https://down-load.lanrar.com/file/?B2FTbQEwV2ZTWgU9BTBQPAY5BT0ACwJoUjBSdAcVWzMCZQA/CSAPKAB4Bj0CJgIwUCxVNlBmVzlRM1MKVGFXMgc6UzUBZVczUzEFZwVhUGkGaQUxAHkCZlImUmkHbVtjAjYAbwlgD2MAZgZ2AiYCc1A3VWJQP1dnUWJTelQ4V2EHKFM1AW9XLFNhBWUFaVBjBjkFZgA6AmZSY1JtB2tbYgIzADQJZg85ADcGZwI1AjFQaVVlUG1XY1FiUzBUalc0BzJTYAFrVzBTKwU+BSFQYgZ6BXUALAJlUidSPQc/W2cCMABgCWMPYgBuBmUCZAIlUH5VOVBiVzBRMFNoVDlXYQc1UzQBZFc1Uz0FYQVhUGMGcgUuAHkCZlI5UiMHZltqAiQAIgkkDywAawZhAmECMVA6VWhQOVdjUWFTY1Q7V3AHclNtASxXPlM3BWEFYlB/BmsFOQBxAjJSYVJmB3VbawIzAGEJeg99ADIGPwIhAm1QVVUzUGRXaFFm',
            cover: '//y.qq.com/music/photo_new/T002R300x300M000000prHhU3BnrO1_2.jpg?max_age=2592000',
        }
    ]
});