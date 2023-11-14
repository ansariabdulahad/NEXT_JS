import { Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";

const Courses = () => {

    const myCourses = [
        {
            title: 'ReactJs',
            price: '3000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        },
        {
            title: 'AngularJs',
            price: '5000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        },
        {
            title: 'NodeJs',
            price: '4000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        },
        {
            title: 'React Native',
            price: '6000',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        },
        {
            title: 'NextJs',
            price: '4500',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        },
        {
            title: 'VueJs',
            price: '5500',
            desc: 'asjkfhkjasdnfk oah sdoiashd ashfa fpaisdoi asjfoisahfoiwd asdhsalk.'
        }
    ]

    const NewCourse = ({ item }) => {
        const tmp = (
            <Grid item sm={4}>
                <Card sx={{ p: 1 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {item.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined">Syllabus</Button>
                    </CardActions>
                </Card>
            </Grid>
        );
        return tmp;
    }

    const design = (
        <>
            <Container sx={{ py: 4, p: 3 }}>
                <Typography variant="h2" sx={{ mb: 3 }}>Courses</Typography>
                <Grid container spacing={5}>
                    {
                        myCourses.map((item, index) => {
                            return <NewCourse key={index} item={item} />
                        })
                    }
                </Grid>
            </Container>
        </>
    );
    return design;
}

export default Courses;