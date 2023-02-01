const branchesPerBranch = 7;
const baseLength = 100
const angleBetweenBranches = (90 / branchesPerBranch)
const iterations = 6

function setup() 
{
    createCanvas(innerWidth, innerHeight)
    background(0)
    angleMode(DEGREES)
    stroke(255)
    translate(innerWidth / 2, innerHeight / 2)

    line(0, 0, 0, 0 - baseLength)
    drawBranch(createVector(0, 0 - baseLength), 1)
}

function draw() 
{

}

function drawBranch(pos, iteration) 
{
    if (iteration < iterations) 
    {
        push()
            translate(pos.x, pos.y)
            rotate(-angleBetweenBranches * round(branchesPerBranch / 2))
            
            push()
            for (let i = 0; i < branchesPerBranch; i++) 
            {
                rotate(angleBetweenBranches)
                line(0, 0, 0, 0 - (baseLength / iteration))

                let newIteration = iteration + 1; 
                drawBranch(createVector(0, 0 - baseLength / iteration), newIteration)
            }
            pop()
        pop()
    }
}
